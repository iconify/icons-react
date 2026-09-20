import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcay3j-in.css';
import '../../css/s/seqwdcaye.css';
import '../../css/j/jmfazjblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcay3j-in"/><path class="seqwdcaye"/><path class="jmfazjblh"/>`,
		"fallback": "stash:compass",
	});
}

export default Component;
