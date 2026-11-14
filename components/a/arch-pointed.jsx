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
		"content": `<style>.ack1brb2n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.375 2.25H5.625q-1.398 0-2.386.989q-.989.988-.989 2.386v12.75q0 1.398.989 2.386q.988.989 2.386.989h12.75q3.375 0 3.375-3.375V5.625q0-1.398-.989-2.386q-.988-.989-2.386-.989M12 7.88Q9.28 9.658 9.25 13v8q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.75 21v-8q.039-4.435 3.875-6.65q.086-.049.181-.074q.095-.026.194-.026t.194.026t.181.074q3.836 2.215 3.875 6.643V21q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T14.75 21v-7.993Q14.72 9.659 12 7.88");
}
</style><path class="ack1brb2n"/>`,
		"fallback": "uix-solid:arch-pointed",
	});
}

export default Component;
