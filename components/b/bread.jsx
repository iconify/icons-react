import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/n/n5yjc01jy.css';
import '../../css/b/brmmwgb3i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9N9LFbAv"><g class="hv130ab-t"><path class="n5yjc01jy"/><path class="brmmwgb3i"/></g></mask></defs><path mask="url(#SVG9N9LFbAv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bread",
	});
}

export default Component;
