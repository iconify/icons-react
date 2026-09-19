import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/ly3dcqbgo.css';
import '../../css/k/kd00u0b-i.css';
import '../../css/j/jxsnms7hz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSDfsTcUV"><g class="aql7dnt-u"><circle class="ly3dcqbgo"/><circle class="kd00u0b-i"/><path class="jxsnms7hz"/></g></mask></defs><path mask="url(#SVGSDfsTcUV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:division",
	});
}

export default Component;
