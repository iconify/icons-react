import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhfxrxiwf.css';
import '../../css/o/o_zlcrb8j.css';
import '../../css/z/z75nfbbdm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qhfxrxiwf"/><rect class="o_zlcrb8j"/><path class="z75nfbbdm"/>`,
		"fallback": "material-icon-theme:android",
	});
}

export default Component;
