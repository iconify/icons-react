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
		"content": `<style>.vd3y2j2ww {
  fill: currentColor;
  d: path("M7 20v-1H5q-1.65 0-2.825-1.175T1 15V9q0-1.65 1.175-2.825T5 5h14q1.65 0 2.825 1.175T23 9v6q0 1.65-1.175 2.825T19 19h-2v1zm3.5-7q.425 0 .713-.288T11.5 12t-.288-.712T10.5 11t-.712.288T9.5 12t.288.713t.712.287m-3 0q.425 0 .713-.288T8.5 12t-.288-.712T7.5 11t-.712.288T6.5 12t.288.713T7.5 13m6 0q.425 0 .713-.288T14.5 12t-.288-.712T13.5 11t-.712.288T12.5 12t.288.713t.712.287m3 0q.425 0 .713-.288T17.5 12t-.288-.712T16.5 11t-.712.288T15.5 12t.288.713t.712.287");
}
</style><path class="vd3y2j2ww"/>`,
		"fallback": "material-symbols:home-max-dots-sharp",
	});
}

export default Component;
