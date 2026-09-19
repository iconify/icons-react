import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ayeqpac6o.css';
import '../../css/q/q4c5ixzyh.css';
import '../../css/f/fal6nbbdw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzy5CJTXn"><g class="rohhhzb0l"><path class="ayeqpac6o"/><path class="q4c5ixzyh"/><path class="fal6nbbdw"/></g></mask></defs><path mask="url(#SVGzy5CJTXn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:experiment",
	});
}

export default Component;
