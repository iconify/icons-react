import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gpftqebpo.css';
import '../../css/z/zlayvnhvl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG55NRi7Ba"><g class="aql7dnt-u"><path class="gpftqebpo"/><path class="zlayvnhvl"/></g></mask></defs><path mask="url(#SVG55NRi7Ba)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cup-one",
	});
}

export default Component;
