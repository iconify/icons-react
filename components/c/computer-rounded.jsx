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
		"content": `<style>.xtl-dub1y {
  fill: currentColor;
  d: path("M2.27 19.462q-.214 0-.358-.144t-.143-.356t.144-.357t.356-.144h19.462q.213 0 .356.144t.144.356t-.144.357t-.356.144zm2.346-2q-.691 0-1.153-.463T3 15.846V6.077q0-.69.463-1.153t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.463 1.152t-1.153.463z");
}
</style><path class="xtl-dub1y"/>`,
		"fallback": "material-symbols-light:computer-rounded",
	});
}

export default Component;
