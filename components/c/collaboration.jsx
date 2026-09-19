import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghwrkz-9q.css';
import '../../css/w/wagegtbdz.css';
import '../../css/j/j8oiwjbra.css';
import '../../css/i/ieleq8bes.css';
import '../../css/f/f63cuib3o.css';
import '../../css/i/ielrgn66f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghwrkz-9q"/><path class="wagegtbdz"/><g class="j8oiwjbra"><circle class="ieleq8bes"/><circle class="f63cuib3o"/></g><path class="ielrgn66f"/>`,
		"fallback": "flat-color-icons:collaboration",
	});
}

export default Component;
