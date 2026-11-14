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
		"content": `<style>.se50peiaj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.795 2.811q-.141-.061-.295-.061h-10q-1.139 0-1.945.805q-.805.806-.805 1.945v13q0 2.75 2.75 2.75h10q.143 0 .276-.053l.019-.008l7-3q.102-.043.186-.114q.085-.07.145-.162q.061-.092.092-.197q.032-.106.032-.216v-11q0-.11-.032-.216q-.031-.105-.092-.197q-.06-.092-.145-.162t-.186-.114zm5.955 14.194l-5.5 2.358V4.637l5.5 2.358zm-11-7.255q2.5 0 2.5 2.5v3.5q0 2.5-2.5 2.5h-2.5q-2.5 0-2.5-2.5v-3.5q0-2.5 2.5-2.5z");
}
</style><path class="se50peiaj"/>`,
		"fallback": "uix-solid:cargo-door",
	});
}

export default Component;
