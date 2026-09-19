import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c3e1keb0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.305 24h20.884c.28 11.59-8.888 21.214-20.479 21.494l-.405.006c-11.874 0-21.5-9.626-21.5-21.5s9.626-21.5 21.5-21.5c3.74-.015 7.418.96 10.66 2.828");
}
</style><path class="c3e1keb0f"/>`,
		"fallback": "arcticons:google-alt-4",
	});
}

export default Component;
