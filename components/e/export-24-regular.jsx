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
		"content": `<style>.h5mrc6bba {
  d: path("M2.753 4.5a.75.75 0 0 1 .743.648l.006.102L3.5 18.254a.75.75 0 0 1-1.493.102L2 18.254L2.002 5.25a.75.75 0 0 1 .75-.75zm12.894 1.804l.073-.084a.75.75 0 0 1 .976-.073l.084.073l4.997 4.997a.75.75 0 0 1 .073.976l-.073.085l-4.996 5.003a.75.75 0 0 1-1.134-.976l.072-.084l3.711-3.717H5.753a.75.75 0 0 1-.743-.647l-.007-.102a.75.75 0 0 1 .648-.743l.102-.007l13.69-.001L15.72 7.28a.75.75 0 0 1-.073-.976l.073-.084l-.073.084z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="h5mrc6bba"/>`,
		"fallback": "fluent:export-24-regular",
	});
}

export default Component;
