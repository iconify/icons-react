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
		"content": `<style>.byz4j4bzv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.5 5.25h17q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .128-.042.248q-.043.121-.122.221l-5.836 7.294V20.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-6.737L2.914 6.469q-.093-.117-.134-.26t-.025-.292t.088-.279t.188-.224q.1-.079.221-.122q.12-.042.248-.042");
}
</style><path class="byz4j4bzv"/>`,
		"fallback": "uix-solid:funnel-kitchen",
	});
}

export default Component;
