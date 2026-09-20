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
		"content": `<style>.wi0noxp0q {
  fill: currentColor;
  d: path("M11.713 14.788q-.213-.213-.213-.538v-4.5q0-.325.213-.537T12.25 9t.538.213t.212.537v4.5q0 .325-.213.538T12.25 15t-.537-.213M6 15q-.45 0-.725-.312T5 14v-4q0-.375.275-.687T6 9h3.25q.325 0 .538.213T10 9.75t-.213.538t-.537.212H6.5v3h2v-.75q0-.325.213-.537T9.25 12t.538.213t.212.537V14q0 .375-.275.688T9 15zm8.713-.213q-.213-.212-.213-.537v-4.5q0-.325.213-.537T15.25 9h3q.325 0 .538.213T19 9.75t-.213.538t-.537.212H16v1h1.25q.325 0 .538.213t.212.537t-.213.538t-.537.212H16v1.25q0 .325-.213.538T15.25 15t-.537-.213");
}
</style><path class="wi0noxp0q"/>`,
		"fallback": "material-symbols:gif-rounded",
	});
}

export default Component;
