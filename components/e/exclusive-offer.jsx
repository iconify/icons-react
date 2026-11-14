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
		"content": `<style>.sqpfcacds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9h14.5A1.75 1.75 0 0 1 21 10.75v.5A1.75 1.75 0 0 1 19.25 13H4.75A1.75 1.75 0 0 1 3 11.25v-.5A1.75 1.75 0 0 1 4.75 9m-.25 4v6.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V13M12 13v8.5m.514-17.708l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}
</style><path class="sqpfcacds"/>`,
		"fallback": "uix:exclusive-offer",
	});
}

export default Component;
