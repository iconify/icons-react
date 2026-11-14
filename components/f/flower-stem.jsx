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
		"content": `<style>.zyz1uol2w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2.601q-1.493-.852-3.107.056q-1.633.919-1.662 2.666Q5.84 6.226 5.84 8t1.391 2.677q.029 1.747 1.662 2.666q1.213.682 2.357.371v6.278l-2.029.812q-.068.027-.13.067t-.115.092t-.094.113t-.071.129q-.029.067-.045.14q-.015.072-.016.146t.013.146q.013.073.041.142q.027.068.067.13t.092.115t.113.094q.061.042.129.071q.067.029.14.045q.072.015.146.016t.146-.013t.142-.041l5-2q.068-.027.13-.067t.115-.092t.094-.113t.071-.129q.029-.067.045-.14q.015-.072.016-.146t-.013-.146q-.013-.073-.041-.142q-.027-.068-.067-.13t-.092-.115t-.113-.094q-.061-.042-.129-.071q-.067-.029-.14-.045q-.072-.015-.146-.016t-.146.013t-.142.041l-1.471.588v-5.678q1.144.311 2.357-.371q1.633-.919 1.662-2.666Q18.16 9.774 18.16 8t-1.391-2.677q-.029-1.747-1.662-2.666q-1.614-.908-3.107-.056M12 5.5q1.036 0 1.768.732T14.5 8t-.732 1.768T12 10.5q-2.5 0-2.5-2.5T12 5.5");
}
</style><path class="zyz1uol2w"/>`,
		"fallback": "uix-solid:flower-stem",
	});
}

export default Component;
