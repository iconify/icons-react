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
		"content": `<style>.murdccffe {
  fill: currentColor;
  d: path("M16.27 14.692V9.308h4.384V11h-.885v-.808h-2.615v3.616h2.615V13h.885v1.692zm-6.462 0V9.308h3.942l.442.442v1.808L13.75 12l.442.442v1.808l-.442.442zm.884-3.134h2.616v-1.366h-2.616zm0 2.25h2.616v-1.366h-2.616zm-7.346.884V9.308h4.385v5.384h-.885V13H4.231v1.692zm.885-2.576h2.615v-1.924H4.231z");
}
</style><path class="murdccffe"/>`,
		"fallback": "material-symbols-light:abc-sharp",
	});
}

export default Component;
