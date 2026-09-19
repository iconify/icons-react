import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.psy0_5b0f {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M38 26V2H26v24H2v12h24v24h12V38h24V26z");
}
</style><path class="psy0_5b0f"/>`,
		"fallback": "emojione:heavy-plus-sign",
	});
}

export default Component;
