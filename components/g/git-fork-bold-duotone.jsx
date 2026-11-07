import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a17etlsmp.css';
import '../../css/g/g015acbcu.css';
import '../../css/m/mnelrmb_n.css';
import '../../css/w/wcp-8_b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a17etlsmp"/><path clip-rule="evenodd" class="g015acbcu"/><path clip-rule="evenodd" class="mnelrmb_n"/><path clip-rule="evenodd" class="wcp-8_b0l"/>`,
		"fallback": "solar:git-fork-bold-duotone",
	});
}

export default Component;
