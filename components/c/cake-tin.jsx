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
		"content": `<style>.s32dqvbzl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 9q0-3.75 9.25-3.75T20.25 9h1.25q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v3q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-1.25V15q0 3.75-9.25 3.75T1.75 15zm19 3v-1.5h-.5V12zm-2-.588V15q0 .712-1.989 1.414q-2.369.836-5.761.836t-5.761-.836Q3.25 15.712 3.25 15v-3.588Q5.475 12.75 11 12.75t7.75-1.338");
}
</style><path class="s32dqvbzl"/>`,
		"fallback": "uix-solid:cake-tin",
	});
}

export default Component;
