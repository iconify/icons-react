import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hfl6swz2m {
  fill: currentColor;
  d: path("M4 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.085A1.495 1.495 0 0 0 11 6.5V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3.494a1.495 1.495 0 0 0-1-1.409zm7 7.5V13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.494a1.495 1.495 0 0 1-1 1.409V13a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.085a1.495 1.495 0 0 1-1-1.415M1.147 8.146l2-2a.5.5 0 1 1 .707.708L2.707 8H5.5a.5.5 0 0 1 0 1H2.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2A.5.5 0 0 1 1 8.503v-.006a.5.5 0 0 1 .144-.348zm11.707 2.708l2-2l.002-.003A.5.5 0 0 0 15 8.503v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L13.293 8H10.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708");
}
</style><path class="hfl6swz2m"/>`,
		"fallback": "fluent:app-span-16-regular",
	});
}

export default Component;
