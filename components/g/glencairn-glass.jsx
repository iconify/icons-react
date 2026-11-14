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
		"content": `<style>.hygbzbcbu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.5 2.25h5q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 1.241 1.057 3.764q1.443 3.442 1.443 5.736q0 4.896-5 5.226v.524h2q2 0 2 2t-2 2h-5.5q-2 0-2-2t2-2h2v-.524q-5-.33-5-5.226q0-2.294 1.443-5.736Q8.75 4.241 8.75 3q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014");
}
</style><path class="hygbzbcbu"/>`,
		"fallback": "uix-solid:glencairn-glass",
	});
}

export default Component;
