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
		"content": `<style>.vb3m9fbfj {
  fill: currentColor;
  d: path("M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577z");
}
</style><path class="vb3m9fbfj"/>`,
		"fallback": "material-symbols-light:bookmark",
	});
}

export default Component;
