import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wesomf70y.css';
import '../../css/s/s71mep88y.css';
import '../../css/v/v5aq_m_zu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wesomf70y"/><path class="s71mep88y"/><path class="v5aq_m_zu"/>`,
		"fallback": "streamline-pixel:business-money-coin-currency",
	});
}

export default Component;
