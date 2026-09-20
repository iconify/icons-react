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
		"content": `<style>.b03sljhfi {
  fill: currentColor;
  d: path("M6 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M7.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M8 7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M3 3.5A1.5 1.5 0 0 1 4.5 2h4A1.5 1.5 0 0 1 10 3.5v2.707q-.524.149-1 .393V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V13h1v-1.5a.5.5 0 0 1 .5-.5h.522a5.5 5.5 0 0 0 .577 3H3.5a.5.5 0 0 1-.5-.5zm13 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.854-1.854L10.5 12.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708");
}
</style><path class="b03sljhfi"/>`,
		"fallback": "fluent:building-checkmark-16-regular",
	});
}

export default Component;
