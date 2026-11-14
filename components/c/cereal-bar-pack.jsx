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
		"content": `<style>.mi8ljkb1y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 3.75h18q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .144-.054.279L20.308 8.25l1.388 3.471q.054.135.054.279t-.054.279l-1.388 3.471l1.388 3.471q.028.069.041.142t.013.146q-.001.074-.016.146q-.016.073-.045.14t-.071.129t-.094.113t-.115.092q-.062.04-.13.067q-.135.054-.279.054H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146q0-.144.054-.279l1.388-3.471l-1.388-3.471Q2.25 12.144 2.25 12t.054-.279L3.692 8.25L2.304 4.779q-.028-.069-.041-.142t-.013-.146q.001-.074.016-.146q.016-.073.045-.14t.071-.129q.041-.061.094-.113q.053-.051.115-.092q.062-.04.13-.067q.135-.054.279-.054M15 6.5H9q-2.25 0-2.25 2.25T9 11h6q2.25 0 2.25-2.25T15 6.5M9 13q-2.25 0-2.25 2.25T9 17.5h6q2.25 0 2.25-2.25T15 13z");
}
</style><path class="mi8ljkb1y"/>`,
		"fallback": "uix-solid:cereal-bar-pack",
	});
}

export default Component;
