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
		"content": `<style>.g34p4bceu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.651 4.752q-.732-.733-1.768-.733q-1.035 0-1.767.733q-.733.732-.733 1.767q0 1.036.733 1.768l1.768 1.769l-.416.416q-1.118-.649-2.235.468l-5.658 5.657q-1.412 1.414.001 2.828q1.413 1.412 2.827-.001l5.658-5.657q1.116-1.117.467-2.235l.416-.416l1.769 1.768q.732.733 1.767.733q1.036 0 1.768-.733q.733-.732.733-1.767q0-1.036-.733-1.768zm3.182 5.657q.106.105.163.243t.057.287t-.057.287t-.163.243q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-4.242-4.242q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.105-.106.243-.163t.287-.057t.287.057t.243.163z");
}
</style><path class="g34p4bceu"/>`,
		"fallback": "uix-solid:disposable-razor",
	});
}

export default Component;
