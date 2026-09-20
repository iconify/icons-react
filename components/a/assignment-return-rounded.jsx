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
		"content": `<style>.oxgzuevgx {
  fill: currentColor;
  d: path("M10.614 12.5h4.194q.212 0 .356-.144t.144-.357t-.144-.356t-.356-.143h-4.194l1.746-1.746q.14-.14.15-.341q.01-.202-.16-.371q-.156-.155-.35-.155t-.354.16l-2.388 2.388q-.242.242-.242.565t.242.566l2.388 2.388q.14.14.342.153t.37-.157q.156-.156.156-.35t-.16-.354zM5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h4.7q-.136-.766.367-1.383Q11.184 2 12.01 2t1.328.617T13.685 4h4.7q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475zm6.922-15.77q.212-.213.212-.538t-.212-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212t.538-.212");
}
</style><path class="oxgzuevgx"/>`,
		"fallback": "material-symbols-light:assignment-return-rounded",
	});
}

export default Component;
