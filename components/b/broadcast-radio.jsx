import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gnens_cuk.css';
import '../../css/n/n0tohdbyd.css';
import '../../css/f/fz171i7ps.css';
import '../../css/z/zv7vgacil.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaJOJcZjJ"><g class="ufeehvblu"><path class="gnens_cuk"/><path class="n0tohdbyd"/><path class="fz171i7ps"/><path class="zv7vgacil"/></g></mask></defs><path mask="url(#SVGaJOJcZjJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:broadcast-radio",
	});
}

export default Component;
