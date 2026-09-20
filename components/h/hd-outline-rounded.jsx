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
		"content": `<style>.jv69j3b5k {
  fill: currentColor;
  d: path("M7.5 13h2v1.25q0 .325.213.538t.537.212t.538-.213t.212-.537v-4.5q0-.325-.213-.537T10.25 9t-.537.213t-.213.537v1.75h-2V9.75q0-.325-.213-.537T6.75 9t-.537.213T6 9.75v4.5q0 .325.213.538T6.75 15t.538-.213t.212-.537zm6 2H17q.425 0 .713-.288T18 14v-4q0-.425-.288-.712T17 9h-3.5q-.2 0-.35.15T13 9.5v5q0 .2.15.35t.35.15m1-1.5v-3h2v3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z");
}
</style><path class="jv69j3b5k"/>`,
		"fallback": "material-symbols:hd-outline-rounded",
	});
}

export default Component;
