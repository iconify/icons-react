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
		"content": `<style>.bod47gzpc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.25 2.5V8q0 2.289-1.612 2.966l3.666 3.299q2.946.207 2.946 3.36v1.25q0 3.375-3.375 3.375h-9.75q-3.375 0-3.375-3.375v-1.25q0-3.153 2.946-3.36l3.666-3.299Q8.75 10.289 8.75 8q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 1.75 1.75 1.75T13.75 8V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146M12 11.509L8.954 14.25h6.092z");
}
</style><path class="bod47gzpc"/>`,
		"fallback": "uix-solid:crane-load",
	});
}

export default Component;
