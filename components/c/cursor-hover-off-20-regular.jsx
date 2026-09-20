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
		"content": `<style>.vhkebvb2k {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l1.242 1.241A2 2 0 0 0 2 6v7a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.293L10 10.707V17.5a.5.5 0 0 0 .91.287l1.571-2.245l2.781.427l1.884 1.885a.5.5 0 0 0 .708-.708zm11.212 12.628l-1.74-.268a.5.5 0 0 0-.486.207l-.84 1.2v-4.206zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.121l1 1H16a1 1 0 0 1 1 1v7a1 1 0 0 1-.885.993z");
}
</style><path class="vhkebvb2k"/>`,
		"fallback": "fluent:cursor-hover-off-20-regular",
	});
}

export default Component;
