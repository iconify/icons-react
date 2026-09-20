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
		"content": `<style>.e8_p7dtgu {
  fill: currentColor;
  d: path("M14.617 8c-.318-2.211-1.9-4-4.617-4c-2.817 0-4.413 1.908-4.647 4.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h6.5l.519-1H5.282C4.028 14 3 12.942 3 11.623c0-1.32 1.028-2.377 2.282-2.377h.071a1 1 0 0 0 .995-.9C6.551 6.315 7.886 5 10 5c1.986 0 3.291 1.175 3.605 3zm2.379 4.405a2 2 0 0 0 .224.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V10H13.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-.504zM12.909 15l-.798 1.54A1 1 0 0 0 13 18h4.998a1 1 0 0 0 .888-1.46L18.087 15z");
}
</style><path class="e8_p7dtgu"/>`,
		"fallback": "fluent:cloud-beaker-20-regular",
	});
}

export default Component;
