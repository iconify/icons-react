import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/t8lnxgces.css';
import '../../css/l/lzfp1zk8l.css';
import '../../css/k/kfdh64trl.css';
import '../../css/d/dc83f5wdc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOkvPKdFD"><g class="rohhhzb0l"><path class="t8lnxgces"/><path class="lzfp1zk8l"/><path class="kfdh64trl"/><path class="dc83f5wdc"/></g></mask></defs><path mask="url(#SVGOkvPKdFD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baggage-delay",
	});
}

export default Component;
