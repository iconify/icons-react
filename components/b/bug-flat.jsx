import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a8m08gb9a.css';
import '../../css/e/e_6znci3x.css';
import '../../css/g/gbtkpcbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a8m08gb9a"/><path class="e_6znci3x"/><path class="gbtkpcbuc"/></g>`,
		"fallback": "streamline-sharp-color:bug-flat",
	});
}

export default Component;
