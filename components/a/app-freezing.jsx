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
		"content": `<style>.vbvujabdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.997 2.5v43M45.5 24.183h-43M13.507 5.668l10.49 10.49m10.49-10.49l-10.49 10.49m-10.49 25.684l10.49-10.49m10.49 10.49l-10.49-10.49m19.227 3.321l-10.49-10.49m10.49-10.49l-10.49 10.49M5.883 34.673l10.49-10.49m-10.49-10.49l10.49 10.49");
}
</style><path class="vbvujabdg"/>`,
		"fallback": "arcticons:app-freezing",
	});
}

export default Component;
