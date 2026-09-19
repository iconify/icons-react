import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/g/g2cpwab9q.css';
import '../../css/p/p-9wjabkv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG77z2GeEx"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="g2cpwab9q"/><circle class="p-9wjabkv"/></g></mask></defs><path mask="url(#SVG77z2GeEx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-music",
	});
}

export default Component;
