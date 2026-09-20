import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dftf9rvck.css';
import '../../css/y/yin69t93p.css';
import '../../css/s/stjv0pdcv.css';
import '../../css/a/a11bti4rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dftf9rvck"/><path class="yin69t93p"/><circle class="stjv0pdcv"/><circle class="a11bti4rf"/>`,
		"fallback": "uim:comment-dots",
	});
}

export default Component;
