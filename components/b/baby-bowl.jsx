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
		"content": `<style>.y67haqeda {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.75 2Q13.5 2 13.5 5.25q0 1.095.369 1.821L9.939 11H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146q0 4.369 2.951 6.883Q7.479 21 12 21t7.299-2.367q2.951-2.514 2.951-6.883q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21.5 11h-9.439l2.868-2.869q.726.369 1.821.369Q20 8.5 20 5.25T16.75 2");
}
</style><path class="y67haqeda"/>`,
		"fallback": "uix-solid:baby-bowl",
	});
}

export default Component;
