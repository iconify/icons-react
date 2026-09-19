import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyk4aoyft.css';
import '../../css/a/a24z59vtw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyk4aoyft"/><path class="a24z59vtw"/>`,
		"fallback": "garden:direction-ltr-fill-16",
	});
}

export default Component;
