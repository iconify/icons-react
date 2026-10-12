import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spkjwsbgk.css';
import '../../css/f/fr-v3dbag.css';
import '../../css/r/rbkzkvmvq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spkjwsbgk"/><path class="fr-v3dbag"/><path class="rbkzkvmvq"/>`,
		"fallback": "energy-icons:dna-20",
	});
}

export default Component;
