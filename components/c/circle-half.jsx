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
		"content": `<style>.f5yk28b2v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22.25 12q0-4.246-3.002-7.248T12 1.75T4.752 4.752T1.75 11.999q0-.074.015-.146q.014-.073.042-.141t.07-.129q.041-.062.093-.114t.114-.093t.129-.069t.141-.043q.072-.014.146-.014h19q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146");
}
</style><path class="f5yk28b2v"/>`,
		"fallback": "uix-solid:circle-half",
	});
}

export default Component;
