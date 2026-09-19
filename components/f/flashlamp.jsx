import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/r/rt4zo2bpe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaVrrHcAf"><g class="s9cl3zbei"><circle class="mzszod_2j"/><path class="rt4zo2bpe"/></g></mask></defs><path mask="url(#SVGaVrrHcAf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:flashlamp",
	});
}

export default Component;
