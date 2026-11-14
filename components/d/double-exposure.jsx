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
		"content": `<style>.iyg1yrnpi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 1.75h6q1.76 0 3.005 1.245T16.25 6v1.75H18q1.76 0 3.005 1.245T22.25 12v6q0 1.373-.757 2.432L18.03 16.97q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094l-4 4q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.105.106.243.163t.287.057H12q-1.76 0-3.005-1.245T7.75 18v-1.75H6q-1.76 0-3.005-1.245T1.75 12V6q0-1.76 1.245-3.005T6 1.75m11.5 16.811l-3.47 3.469q-.105.106-.243.163t-.287.057H18q1.373 0 2.432-.757z");
}
</style><path class="iyg1yrnpi"/>`,
		"fallback": "uix-solid:double-exposure",
	});
}

export default Component;
