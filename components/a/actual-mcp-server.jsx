import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpdbmfbhr.css';
import '../../css/i/i6oim-fty.css';
import '../../css/n/n30ul-b9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="dpdbmfbhr"/><path class="i6oim-fty"/><path class="n30ul-b9z"/>`,
		"fallback": "selfhst:actual-mcp-server",
	});
}

export default Component;
