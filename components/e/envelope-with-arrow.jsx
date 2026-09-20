import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.di2zz5bcg {
  fill: var(--svg-color--ed6c30, #ed6c30);
  d: path("M63.85 62.28L40.24 30.06h14.73V0h17.62v30.06h14.88z");
}

.utxjc7b5q {
  fill: var(--svg-color--fcc21b, #fcc21b);
  fill-rule: evenodd;
}

.yrm9nabnt {
  d: path("M14.85 48.36v13.68L64 86.47l49.15-24.43V48.36z");
}

.z2vuvgezn {
  d: path("M14.85 69.89v51.42h98.3V69.89L64 94.33z");
}
</style><g clip-rule="evenodd" class="utxjc7b5q"><path class="z2vuvgezn"/><path class="yrm9nabnt"/></g><path class="di2zz5bcg"/>`,
		"fallback": "noto-v1:envelope-with-arrow",
	});
}

export default Component;
