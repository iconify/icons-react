import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oiqcwsb6y {
  fill: currentColor;
  d: path("M13.042 17.962v-1.139l4.385-4.484q.864-.914 1.259-1.52q.395-.608.395-1.358q0-1.032-.707-1.716t-1.928-.684q-.9 0-1.545.414t-.985 1.156l-.962-.416q.465-.932 1.315-1.555t2.189-.622q1.69 0 2.68 1.005t.989 2.418q0 .952-.477 1.743q-.477.79-1.442 1.78L14.404 16.9l.012.062h6.142v1zm-3.6-4.577h-6v-1h6z");
}
</style><path class="oiqcwsb6y"/>`,
		"fallback": "material-symbols-light:exposure-neg-2-sharp",
	});
}

export default Component;
