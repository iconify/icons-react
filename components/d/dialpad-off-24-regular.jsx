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
		"content": `<style>.kdilnfv1k {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.5 4.502a1.25 1.25 0 1 0 1.5 1.5l3.5 3.5a1.25 1.25 0 1 0 1.498 1.498l7.5 7.5a.75.75 0 0 0 1.061-1.06zM18.246 14c0 .298-.104.571-.278.786l-1.758-1.758a1.25 1.25 0 0 1 2.036.972M13.25 9c0 .299-.105.573-.28.788L11.212 8.03A1.25 1.25 0 0 1 13.25 9M8.254 4c0 .3-.106.575-.282.79L6.214 3.032A1.25 1.25 0 0 1 8.254 4M12 17.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-4.996-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m9.992-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M12 2.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5");
}
</style><path class="kdilnfv1k"/>`,
		"fallback": "fluent:dialpad-off-24-regular",
	});
}

export default Component;
