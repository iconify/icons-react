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
		"content": `<style>.mlsn1e1nj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.73 30.37V43.5h20.54V30.37");
}

.s3ldh7bto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.13 30.54L24 12.79L6.87 30.54");
}

.s6tqidb5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.13 22.25L24 4.5L6.87 22.25");
}
</style><path class="s6tqidb5b"/><path class="s3ldh7bto"/><path class="mlsn1e1nj"/>`,
		"fallback": "arcticons:discreetlauncher",
	});
}

export default Component;
