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
		"content": `<style>.ju598tb3f {
  fill: currentColor;
  d: path("M4.5 19q-.633 0-1.066-.434Q3 18.133 3 17.5V6.616q0-.633.491-1.125Q3.983 5 4.615 5h4.981l2 2h7.789q.517 0 .903.28t.539.72H4v9.385q0 .211.106.346t.279.23l2.265-7.576h16.216l-2.268 7.556q-.142.476-.545.768q-.403.291-.9.291z");
}
</style><path class="ju598tb3f"/>`,
		"fallback": "material-symbols-light:folder-open",
	});
}

export default Component;
