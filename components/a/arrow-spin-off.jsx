import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fwvb0bbrp {
  d: path("M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789");
}

.nko804_7a {
  d: path("M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.zlgf7ibdg {
  d: path("M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z");
}
</style><g class="cuyn6tgcc"><path class="fwvb0bbrp"/><path class="zlgf7ibdg"/><path class="nko804_7a"/></g>`,
		"fallback": "pepicons-pop:arrow-spin-off",
	});
}

export default Component;
