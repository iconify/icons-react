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
		"content": `<style>.ck_9okb4y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 7.5v4.786q-1 .732-1 2.464q0 3 3 3h14.5q3 0 3-3q0-1.737-1.006-2.468q-.126-2.496-3.174-4.302q-2.919-1.73-6.57-1.73q-.24 0-.436.14q-3.151 2.251-7.259.425q-.146-.065-.305-.065q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146m2 4.25q-.261 0-.5.023V8.601q4.131 1.415 7.482-.849q3.1.053 5.573 1.518q1.929 1.144 2.336 2.494q-.189-.014-.391-.014z");
}
</style><path class="ck_9okb4y"/>`,
		"fallback": "uix-solid:espadrille",
	});
}

export default Component;
